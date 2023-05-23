# ProxyDesignPattern
Basit bir proxy design pattern örneği

RealSubject sınıfı, gerçek nesneyi temsil eder. process metodu, gerçek nesnenin işlemlerini gerçekleştirir.
Proxy sınıfı, gerçek nesneye erişimi kontrol eder ve gerektiğinde gerçek nesneyi oluşturur. process metodu, eğer gerçek nesne henüz oluşturulmamışsa, RealSubject'i oluşturur ve ardından process metodunu çağırır.
Subject arabirim (interface) olarak tanımlanır ve process metodu bu arabirimde yer alır.