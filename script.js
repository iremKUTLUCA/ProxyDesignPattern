function CryptocurrencyAPI(){

    this.getValue = function(coin)
    {
        console.log("calling external API")
        switch(coin){
            case "BTC":
                return 10000;
            case "ETH":
                return 500;
            case "LTC":
                return 200;
            default:
                return 0;
        }
    }
}



function CryptocurrencyProxy()
{
    const api = new CryptocurrencyAPI();
    this.cache = {};

    this.getValue = function(coin){
        if(this.cache[coin] == null){
            this.cache[coin] = api.getValue(coin);
        }
        return this.cache[coin];
    }
}

const proxy = new CryptocurrencyProxy();

print(proxy.getValue("BTC"));
print(proxy.getValue("ETH"));
print(proxy.getValue("LTC"));
print(proxy.getValue("BTC"));   
print(proxy.getValue("ETH"));
print(proxy.getValue("LTC"));
print(proxy.getValue("BTC"));