let delay = 0;
const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (let spin of spinner) {
	setTimeout(() => {
		process.stdout.write(`\r${spin}   `);
	}, (delay += 300));
}
