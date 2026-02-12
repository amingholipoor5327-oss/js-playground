# 🧩 Dynamic Element Creator

## 📋 توضیح مختصر
ساخت المان‌های HTML به صورت پویا با انتخاب تگ و متن دلخواه

## ⚡ ویژگی‌ها
- انتخاب تگ (Div, h1, p, h3, span)
- ورودی متن دلخواه
- نمایش لحظه‌ای المان ساخته شده
- انیمیشن و رابط کاربری مدرن

## 🚀 نحوه استفاده
```javascript
// کد اصلی پروژه
function Create() {
    let Utext, Utag, CE, AC, Result;
    Utag = document.getElementById("select").value;
    Utext = document.getElementById("input").value;
    Result = document.getElementById("result");
    
    AC = document.createElement(Utag);
    CE = document.createTextNode(Utext);
    AC.appendChild(CE);
    
    Result.appendChild(AC);
}