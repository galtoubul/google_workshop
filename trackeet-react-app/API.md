# API Trackeet


## List cards data


```js
GET https://trackeet.com/getCards
```
##parameters
#### - cursor or page number
#### - position one of { wish_list , on_the_way, arrived}

##example 


##Response
```js
{   cursor:"string",
    cards:[{
  currency_amount: "int"
    order_name: "string",
    company: "string",
    estimated_arrival_date: "string",
    order_url: "string",
    currency: "int" (0=USD, 1=ILS, 2=EUR, 3=GBP),
    order_date: "string",
    order_serial_code: "string",
    notes: "string",
    timeline_position: "string" (wishlist/on_the_way/arrived),
    card_id:"string"
},
    {
        currency_amount: "int",
        order_name: "string",
        company: "string",
        estimated_arrival_date: "string",
        order_url: "string",
        currency: "int" (0=USD, 1=ILS, 2=EUR, 3=GBP),
        order_date: "string",
        order_serial_code: "string",
        notes: "string",
        timeline_position: "string" (wishlist/on_the_way/arrived),
        cardId:"string"
    },
    {
        currency_amount: "int",
        order_name: "string",
        company: "string",
        estimated_arrival_date: "string",
        order_url: "string",
        currency: "int" (0=USD, 1=ILS, 2=EUR, 3=GBP),
        order_date: "string",
        order_serial_code: "string",
        notes: "string",
        timeline_position: "string" (wishlist/on_the_way/arrived),
        cardId:"string"
    }
    
]}
```


## add Card


```js
post https://trackeet.com/addCard
```
##parameters
#### - query -null

##content
```js
{card:{
    order_name: "string",
    company: "string",
    estimated_arrival_date: "string",
    order_url: "string",
    currency: "int" (0=USD, 1=ILS, 2=EUR, 3=GBP),
    order_date: "string",
    order_serial_code: "string",
    notes: "string",
    timeline_position: "string" (wishlist/on_the_way/arrived),
    cardId:"string"
}}
```
## update Card


```js
post https://trackeet.com/updateCard
```
##parameters
#### - query -    cardId:"string"

##content - all of them are optional
```js
{
    order_name: "string",
    company: "string",
    estimated_arrival_date: "string",
    order_url: "string",
    currency: "int" (0=USD, 1=ILS, 2=EUR, 3=GBP),
    order_date: "string",
    order_serial_code: "string",
    notes: "string",
    timeline_position: "string" (wishlist/on_the_way/arrived),
    card_id:"string"
}
```

## delete Card


```js
post https://trackeet.com/deleteCard
```
##parameters
#### - query -    cardId:"string"

