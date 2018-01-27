// Zalo integration
module.exports = (Franz) => {
  function getMessages() {
    let direct = 0;
    // let indirect = 0;
    const FranzData = document.getElementsByClassName("func-unread");
    if (FranzData) {
      if (FranzData.length > 0) {
        direct = FranzData.length;
      }
      // indirect = FranzData.indirect;
    }

    Franz.setBadge(direct);
  }

  Franz.loop(getMessages);
}