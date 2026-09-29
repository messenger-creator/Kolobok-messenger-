importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
firebase.initializeApp({apiKey:"AIzaSyCcBnt6FIrSiSg-jkmKDtXmJ06ClTqcVh0",authDomain:"myder6.firebaseapp.com",projectId:"myder6",storageBucket:"myder6.firebasestorage.app",messagingSenderId:"292561546960",appId:"1:292561546960:web:add0ce18708280f8e838d5"});
const messaging=firebase.messaging();
messaging.onBackgroundMessage(p=>{
  const d=p.data||{};
  return self.registration.showNotification(d.title||"Новое сообщение",{
    body:d.body||"",icon:"icon-192.png",badge:"icon-192.png",
    tag:d.chatId||"msg",renotify:true,data:{chatId:d.chatId||""}
  });
});
self.addEventListener("notificationclick",e=>{
  e.notification.close();
  e.waitUntil(clients.matchAll({type:"window",includeUncontrolled:true}).then(l=>{
    for(const c of l){if("focus" in c)return c.focus()}
    return clients.openWindow("./");
  }));
});
