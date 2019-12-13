# Brawlhalla API Wrapper for Node.js

## Useful Links

Brawlhalla API & Keys info: [dev.brawlhalla.com](http://dev.brawlhalla.com)

Corehalla: [corehalla.com](http://corehalla.com)

## Installation

Install via NPM:

```bash
$ npm i corehalla
```

Install via yarn:

```bash
$ yarn add corehalla
```

## Configuration

Import the module and connect using your api key:

```js
const bh_api = require('corehalla')('API_KEY');
```

## Default API Methods

### Leaderboard

**.fetchLeaderboard(options)**
_Uses One Brawlhalla API Call_

```js
var options = {
	bracket: '1v1', // '1v1' or '2v2'
	region: 'all', // 'all', 'us-e', 'us-w', 'eu', 'brz', 'aus', 'sea', 'jap'
	page: 1,
	player_name: ''
};

bh_api
	.fetchLeaderboard(options)
	.then(leaderboard => {
		// Do something
	})
	.catch(err => console.log(err));
```

## Custom Methods
