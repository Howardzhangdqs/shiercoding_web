const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const rootPath = ['./docs', './blog'];

const img_ext_png = /\.png$/;
const img_ext_jpg = /\.jpg$/;

const img_compress = (filename) => {
    if (img_ext_jpg.test(filename)) {
        console.log(filename);
        
        exec(`magick convert -strip -quality 75% ${filename} ${filename}`, (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log(stdout);
        });
    } else if (img_ext_png.test(filename)) {
        console.log(filename);

        exec(`pngquant ${filePath} --speed 1 --output ${filePath}.min.png`, (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log(stdout);
        });
    }
};

function walkSync(currentDirPath) {
    fs.readdirSync(currentDirPath).forEach((name) => {
        const filePath = path.join(currentDirPath, name);
        const stat = fs.statSync(filePath);

        if (stat.isFile()) img_compress(filePath);
        else if (stat.isDirectory()) {
            walkSync(filePath);
        }
    });
}

rootPath.forEach((item) => { walkSync(item) });