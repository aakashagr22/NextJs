import mongoose from 'mongoose';
const clsx = require("clsx");
const { twMerge } = require("tailwind-merge");

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

module.exports = { cn };