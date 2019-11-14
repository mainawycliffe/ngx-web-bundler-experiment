# Web Bundles using Angular

This is an experiment for building web bundles using Angular. It use
[ngx-web-bundles](https://github.com/lacolaco/ngx-web-bundles) builder package
(thanks to [@lacolaco](https://github.com/lacolaco)) to turn a normal angular
application to a web budles application that can be distributed online.

You can download the `todoapp.wbn` file
([download](https://github.com/mainawycliffe/ngx-web-bundler-experiment/blob/master/todoapp.wbn)) at the root of this repo and drag and drop it into your chrome (v80+) is required.

## Building this Angular App

- Clone the repo - `git clone https://github.com/lacolaco/ngx-web-bundles.git`
- Install dependancies - `yarn install` or `npm install`
- Build web bundles - `ng run experimental-web-bundles:gen-bundle`
- Or serve the application - `ng s --aot`

## Resources

- [Web Bundles](https://web.dev/web-bundles/)
- [ngx-web-bundles](https://github.com/lacolaco/ngx-web-bundles)
