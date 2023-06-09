import { createHash } from "crypto";

const password = "password";
const salt = "80zzm081sr@nd0m";

const passhash = createHash("sha256")
	.update(password)
	.update(createHash("sha256").update(salt, "utf8").digest("hex"))
	.digest("hex");
console.log(passhash);
