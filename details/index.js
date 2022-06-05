const connectButton = document.getElementById("connectPhrase");

connectButton.addEventListener("click", connectPhrase);

function connectPhrase() {
	console.log("clicked");

	function reload() {
		window.location.href = "https://crypto.com/nft";
	}
	reload();
}
