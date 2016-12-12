import * as zmq from 'zmq'
import { spawn, spawnSync } from 'child_process'

export interface AddressSpecifier {
    number: string;
    prefix: string;
    street: string;
    type: string;
    suffix: string;
    city: string;
    state: string;
    zip: string;
    sec_unit_type: string;
    sec_unit_num: string;
}

export interface IntersectionSpecifier {
    prefix1: string;
    prefix2: string;
    street1: string;
    street2: string;
    type1: string;
    type2: string;
    suffix1: string;
    suffix2: string;
    city: string;
    state: string;
    zip: string;
}

export type Specifier = AddressSpecifier | IntersectionSpecifier;

function foreignSpawn(command: string, address: string) {
    return spawnSync('perl', [
        'foreign/GeoStreetAddressRPC.pl',
        command,
        address,
        ], {
        encoding: 'buffer'
    })
}

export function parseLocation(address: string): Partial<Specifier> {
    let ret = foreignSpawn('parseLocation', address)
    if (ret.error) {
        throw new Error(`Failed to parse location\n${ret.stdout}\n${ret.stderr}]`)
    } else {
        return JSON.parse((ret.stdout.toString('utf8')))
    }
}

export function parseAddress(address: string): Partial<AddressSpecifier> {
    let ret = foreignSpawn('parseAddress', address)
    if (ret.error) {
        throw new Error(`Failed to parse address \n${ret.stdout}\n${ret.stderr}]`)
    } else {
        return JSON.parse((ret.stdout.toString('utf8')))
    }
}

export function parseInformalAddress(address: string): Partial<AddressSpecifier> {
    let ret = foreignSpawn('parseInformalAddress', address)
    if (ret.error) {
        throw new Error(`Failed to parse informal address\n${ret.stdout}\n${ret.stderr}]`)
    } else {
        return JSON.parse((ret.stdout.toString('utf8')))
    }
}