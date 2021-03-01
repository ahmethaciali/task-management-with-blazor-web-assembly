var isNotify = true;

function InitializeNotification() {
    
    console.log('Bildirim gönderme fonksiyonu çalıştı');
    if (!isNotify) return;  /* bu kısım kullanıcıya ekran üzerinde bildirimleri kapatma seçeneği sunar. */
    
    if (!Notification) {
        /* Burası browserin notificationu desteklemediği durumda ortaya çıkar */
        console.log('Notifications are supported icn modern versions of Chrome, Firefox, Opera and Firefox.');
        return;
    }
    console.log(Notification.permission); /* Bildirimle ilgili durumu logda gösterir.Eğer granted ise izin verilmiş demektir bu durumda bildirimi ekrana gönderebiliriz. */
    if (Notification.permission !== "granted") {
        console.log('Henüz onay alınmadığı için kullanıcıya ekranda soracak popupu açıyor');
        Notification.requestPermission();
    }
}

function NotifyMessage(titleList) {
    if (!isNotify) return;  /* bu kısım kullanıcıya ekran üzerinde bildirimleri kapatma seçeneği sunar. */
    
    if (!Notification) {
        /* Burası browserin notificationu desteklemediği durumda ortaya çıkar */
        console.log('Notifications are supported icn modern versions of Chrome, Firefox, Opera and Firefox.');
        return;
    }
    console.log(Notification.permission); /* Bildirimle ilgili durumu logda gösterir.Eğer granted ise izin verilmiş demektir bu durumda bildirimi ekrana gönderebiliriz. */
    if (Notification.permission !== "granted") {
        console.log('Henüz onay alınmadığı için kullanıcıya ekranda soracak popupu açıyor');
        Notification.requestPermission();
    }

    //Burada ise bildirimi oluşturup ekrana gönderiyoruz
    var listString = titleList.join(",");
    var message = "'" + listString + "'" + " adlı tasklarının deadline süreleri geçti";
    var notification = new Notification('Push Notification', {
        //icon: 'www.resim.jpg', /*Burası bildirim geldiğinde gözükecek resim*/
        body: message   /* Burası bildirimin içeriği */

    });
}