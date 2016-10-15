# Angular2-Token
[![Join the chat at https://gitter.im/lynndylanhurley/devise_token_auth](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/angular2-token/Lobby)
[![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)

## About
This an example for [Angular2-Token](https://github.com/neroniaky/angular2-token) a token based authentication service for Angular2 with multiple user support.
It uses a Rails 5.0 API backend with the [devise token auth](https://github.com/lynndylanhurley/devise_token_auth) gem.

Angular2-Token is currently in Alpha. Any contribution is much appreciated.

## Live Demo
You can find a running example [here](https://angular2-token.herokuapp.com/).

## Content
- [Requirements](#requirements)
- [Installation](#installation)
- [License](#license)

## Requirements

- NodeJs >= 6.3.1
- Ruby >= 2.2.2

## Installation
1. Clone this repository with
    ```bash
    git clone https://github.com/neroniaky/angular2-token-example.git
    ```

2. Move to the directory and install gem dependencies
    ```bash
    cd angular2-token-example
    bundle install
    ```

3. Migrate the database
    ```bash
    rails db:migrate
    ```

4. Install angular2 client
    ```bash
    npm run postinstall
    ```

## Run the app

1. Run the rails server in the main directory with
    ```bash
    rails server
    ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

## License
The MIT License (see the [LICENSE](https://github.com/neroniaky/angular2-token-example/blob/master/LICENSE) file for the full text)
