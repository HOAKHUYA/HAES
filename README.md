# HAES - HOAKHUYA AES 256
### Cross platform 256bit AES encryption / decryption
#### HAES has supported for platform's as pure, with self-contained, native executables with no external dependencies and minimal overhead.

### HAES currently for
- NodeJS
- Javascript
- PHP 5+
### Installation
- Download latest releases at : [HAES/releases/latest](https://github.com/HOAKHUYA/HAES/releases/latest)

### Getting Started
- Encrypt anything, files , html, database, and plain text with `hencrypt(content,passphrase);`
- Decrypt use `hdecrypt(crypted_content,passphrase);`
- in PHP, use `AES::hencrypt()` and `AES::hdecrypt()`

Note: Everytime you encrypt with `hencrypt` the result never the same, but don't worries, you can decrypt all of that with right passphrase!


### License
- Chris Veness 2005-2014 / MIT Licence
- Rijndael algorithm
- HOAKHUYA / GPL-3.0-or-later
