#!/usr/bin/env node

import { Customer } from "./Customer";
import { MovieCollection } from "./Movie";

import { Command } from "commander";
import { htmlstatement } from "./statement";
// import {htmlstatement} from "./htmlstatement"

const program: Command = require("commander");
const version: string = require("../package.json").version;

const customer: Customer = require("./data/customer.json");
const movies: MovieCollection = require("./data/movies.json");

program
  .version(version)
  .description("A CLI for generating customer statements");

program
  .command("statement-1")
  .description("Prints out a plain-text statement for the customer")
  .action(() => console.log(htmlstatement(customer, movies)));

program
  .command("html-statement")
  .description("Prints out an html-text statement for the customer")
  .action(() => console.log(htmlstatement(customer, movies)));

program.parse(process.argv);
