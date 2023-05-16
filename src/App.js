import React, { Component } from "react";
import axios from "axios";
import { Loader } from "semantic-ui-react";
import Button from "./components/Button";
import NavIcons from "./components/NavIcons";
import Input from "./components/Input";
import Photo from "./components/Photo";
import Header from "./components/Header";
import EmptyState from "./components/EmptyState";
import NoResultState from "./components/NoResultState";
import _ from "lodash";
import { PlusIcon, CheckIcon } from "@heroicons/react/20/solid";
import "../src/styles/globals.css";
import { createClient } from "pexels";

const client = createClient(
  "LM0Q3RJVf8hGsD65tfD5p1Dcc9VC1aSzBK0dQkFCVoWuatMxAedlwMW3"
);

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
const { createBucketClient } = require("@cosmicjs/sdk");

const bucket = createBucketClient({
  bucketSlug: getParameterByName("bucket_slug"),
  readKey: getParameterByName("read_key"),
  writeKey: getParameterByName("write_key"),
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    document.getElementById("search-input").focus();
  }
  async getPhotos(q) {
    const query = q;
    try {
      await client.photos.search({ query, per_page: 20 }).then((res) => {
        console.log(res.photos);
        const photos = res.photos;
        this.setState({
          data: {
            photos,
          },
        });
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleKeyUp(e) {
    if (!e.target.value) {
      this.setState({
        data: {},
      });
      return;
    }
    this.getPhotos(e.target.value);
  }
  handleAddToMedia(photo) {
    let adding_media = this.state.data.adding_media;
    if (!adding_media) adding_media = [];
    this.setState({
      data: {
        ...this.state.data,
        adding_media: [...adding_media, photo.id],
      },
    });
    axios({
      url: photo.urls.full,
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const media = new Blob([response.data], { type: "image/jpeg" });
      media.name = photo.id + ".jpg";
      bucket.media
        .insertOne({
          media: media,
        })
        .then(() => {
          const adding_media = this.state.data.adding_media;
          let added_media = this.state.data.added_media;
          if (!added_media) added_media = [];
          this.setState({
            data: {
              ...this.state.data,
              adding_media: _.pull(adding_media, photo.id),
              added_media: [...added_media, photo.id],
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
  getButton(photo) {
    if (
      this.state.data.adding_media &&
      this.state.data.adding_media.indexOf(photo.id) !== -1
    )
      return (
        <div>
          <Button>
            <span className="mr-2">Adding...</span>
            <Loader active inline size="mini" />
          </Button>
        </div>
      );
    if (
      this.state.data.added_media &&
      this.state.data.added_media.indexOf(photo.id) !== -1
    )
      return (
        <div>
          <Button>
            <span className="mr-2">Added</span>
            <CheckIcon
              width={20}
              height={20}
              className="text-green-500 dark:text-green-400"
            />
          </Button>
        </div>
      );
    return (
      <div>
        <Button onClick={this.handleAddToMedia.bind(this, photo)}>
          <span className="mr-2 block sm:hidden md:block">Add to Media</span>
          <span className="mr-2 hidden sm:block md:hidden">Add Media</span>
          <PlusIcon
            width={20}
            height={20}
            className="text-gray-700 dark:text-gray-400"
          />
        </Button>
      </div>
    );
  }
  render() {
    const photos = this.state.data.photos;
    return (
      <main className="mx-auto h-full w-full max-w-[1000px] p-2">
        <Header>
          <Input onKeyUp={this.handleKeyUp.bind(this)} />
          <NavIcons />
        </Header>
        <div>
          {photos && (
            <div className="mt-4 grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-6">
              {photos.map((photo) => {
                return (
                  <div key={photo.id} className="relative w-full">
                    <Photo src={photo.src.medium} photo={photo} url={photo.url}>
                      {this.getButton(photo)}
                    </Photo>
                  </div>
                );
              })}
            </div>
          )}
          {!photos && <EmptyState />}
          {photos && photos.length <= 0 && <NoResultState />}
        </div>
      </main>
    );
  }
}

export default App;
