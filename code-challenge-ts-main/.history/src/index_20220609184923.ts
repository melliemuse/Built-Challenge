#!/usr/bin/env node

import { Customer } from "./Customer";
import { MovieCollection } from "./Movie";

import { Command } from "commander";
import { statement } from "./statement2";
// import {htmlstatement} from "./htmlstatement"
import {test1} from "./htmlstatement"

const program: Command = require("commander");
const version: string = require("../package.json").version;

const customer: Customer = require("./data/customer.json");
const movies: MovieCollection = require("./data/movies.json");

program
  .version(version)
  .description("A CLI for generating customer statements");

program
  .command("statement2")
  .description("Prints out a plain-text statement for the customer")
  .action(() => console.log(statement(customer, movies)));

program
  .command("test1")
  .description("Prints out an html-text statement for the customer")
  .action(() => console.log(test1));

program.parse(process.argv);
