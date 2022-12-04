# Mapmaking (actual rendering)

## Leaflet
[Documentations](https://leafletjs.com/reference.html). Before using Leaflet in **any*** project, the following imports must be added to the HTML page where Leaflet will be used to create a map:

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="" />
<script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>
```

## React Leaflet
[Documentation](https://react-leaflet.js.org/docs/start-setup/). React Leaflet is based on Leaflet, and their documentation assumes that we as developers are familiar with Leaflet itself. For this reason, the aforementioned import for Leaflet projects must also be included in the **index.html** file of the React project.

React Leaflet has some dependencies that must first be installed:

```sh
npm install react react-dom leaflet
```

After which React Leaflet itself can be installed:
```sh
npm install react-leaflet
```

React Leaflet's [setup page](https://react-leaflet.js.org/docs/start-setup/) shows an example for testing if the installation was successful. Note that a map also requires defining its dimensions, otherwise it would not be visible. To do that, add a `style` prop to the `<MapContainer />` component and provide a width and a height.

# APIs

## geoapify
[Documentation](https://apidocs.geoapify.com/#docs)

### `geocode`- finding addresses
[Geocode documentation](https://apidocs.geoapify.com/docs/geocoding/forward-geocoding/#about)

```
https://api.geoapify.com/v1/geocode/search?apiKey=_______&text=______
```
Also for `&filter=`, see *Location Filters* section in the geocode doc page.