process.stdout.write('hello from spinner1.js... \rheyyy\n');
const x = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ',`\n`];

for (let i = 0; i < x.length; i++) {

  setTimeout(() => {
    process.stdout.write(x[i]);
  }, 100 + i * 200);
  
}

// ... fill in the rest yourself ...
