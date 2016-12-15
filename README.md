# geo-streetaddress-us

[![npm](https://img.shields.io/npm/v/geo-streetaddress-us.svg)](https://www.npmjs.com/package/geo-streetaddress-us)
[![GitHub tag](https://img.shields.io/github/tag/SweetIQ/node-geo-streetaddress-us.svg)](https://github.com/SweetIQ/node-geo-streetaddress-us)
[![CircleCI branch](https://img.shields.io/circleci/project/github/SweetIQ/node-geo-streetaddress-us/master.svg)](https://circleci.com/gh/SweetIQ/node-geo-streetaddress-us)

This is a NodeJS wrapper for Perl extension [Geo::StreetAddress::US].

> Geo::StreetAddress::US is a regex-based street address and street intersection parser for the United States. Its basic goal is to be as forgiving as possible when parsing user-provided address strings. 
> 
> Geo::StreetAddress::US knows about directional prefixes and suffixes, fractional building numbers, building units, grid-based addresses (such as those used in parts of Utah), 5 and 9 digit ZIP codes, and all of the official USPS abbreviations for street types, state names and secondary unit designators.

## Dependencies

- Node.js v6
- Perl 5

[cpanm]: https://metacpan.org/pod/App::cpanminus

## Usage

Install GeoStreetAddressUS from npm

```bash
npm install --save geo-streetaddress-us
```

Use in NodeJS:

```javascript

var geoStreetAddressUS = require('geo-streetaddress-us')

geoStreetAddressUS.parseLocation('1005 Gravenstein Hwy N, Sebastopol CA 95272')

/*
{
    suffix: 'N',
    number: '1005',
    city: 'Sebastopol',
    street: 'Gravenstein',
    state: 'CA',
    zip: '95272',
    type: 'Hwy'
}
*/

geoStreetAddressUS.parseAddress('1005 Gravenstein Hwy N, Sebastopol CA 95272')

/*
{
    suffix: 'N',
    number: '1005',
    city: 'Sebastopol',
    street: 'Gravenstein',
    state: 'CA',
    zip: '95272',
    type: 'Hwy'
}
*/

geoStreetAddressUS.parseInformalAddress('1025 Gravenstein hwy north Sebastopol CA 95272-3092')

/*
{
    suffix: 'N',
    number: '1025',
    city: 'Sebastopol',
    street: 'Gravenstein',
    state: 'CA',
    zip: '95272',
    type: 'Hwy'
}
*/

```


[Geo::StreetAddress::US]: http://search.cpan.org/~timb/Geo-StreetAddress-US-1.04/US.pm
