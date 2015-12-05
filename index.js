'use strict';

if (typeof JSON === 'undefined' || typeof Promise === 'undefined') {
  throw new Error('Requires global Promise and JSON');
}

exports.parse = function (str) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(JSON.parse(str));
    } catch (err) {
      reject(err);
    }
	});
};

exports.stringify = function (obj) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(JSON.stringify(obj));
    } catch (err) {
      reject(err);
    }
	});
};