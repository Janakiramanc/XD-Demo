let isSubscribed = false;

//Notification request
export default function displayNotification(prodName) {
  fetch(window.location.origin + "/productNotification", {
    method: "POST",
    body: JSON.stringify({ name: prodName }),
    headers: {
      "content-type": "application/json"
    }
  });
}

const applicationServerPublicKey =
  "BOYJZKXQblXrn8rtRpeTuZCY8yN2qpnn4zoUrVHvpAJYJGfbitAGiKdYt_RKpr3orY1kZDZ4VJRSANSHywUdXxU";

if (!isSubscribed) subscribeUser();

function urlB64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function subscribeUser() {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  navigator.serviceWorker.ready.then(function(reg) {
    reg.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
      })
      .then(function(subscription) {
        isSubscribed = true;
        console.log("User is subscribed.", subscription);
        fetch(window.location.origin + "/subscribe", {
          method: "POST",
          body: JSON.stringify(subscription),
          headers: {
            "content-type": "application/json"
          }
        });
      })
      .catch(function(err) {
        console.log("Failed to subscribe the user: ", err);
      });
  });
}
