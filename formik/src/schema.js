// Validasyon Şeması
// Yup kullanarak bir doğrulama şeması oluşturabiliriz.
// Şemalar, nesnelerin yapısını ve bu nesnelerin her bir alanı için geçerli doğrulama kurallarını tanımlar.

import * as yup from "yup";

// Metin içerisinde en az 
// 1 büyük harf
// 1 küçük harf
// 1 rakam
// 1 özel karakter

const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";
// yup.object.shape() ifadesi form'un state'ini tuttuğumuz nesnenin her bir alanının geçerli olması için gerekli koşulları ifade etmemizi sağlar.
const schema = yup.object().shape({
    // email alanını geçerli olması için gerekli koşullar 
    email: yup.string()
    .reguired("email alanı zorunludur")
    .email("email geçerli bir formatta değil"),
    // age alanının geçerli olması için gerekli koşullar 
    age: yup.number()
    .min(18, "yaş 18'den küçük olamaz")
    .max(100, "yaş 100'den büyük olamaz").integer("yaş tam sayı olmalı")
    .reguired("yaş alanı zorunludur"),

    // Şifre alanının geçerli olması için gerekli koşullar
     password: yup.string()
     .min(5, "şifre en az 5 karakter olmalıdır.")
     .matches(regex, "şifre yeterince güçlü değil")
     .reguired("şifre alanı zorunludur")
     // şifre onay alanının geçerli olması için gerekli koşullar:
     // oneOf(): Kontrol ettiğimiz metin verilen dizi içerisindeki değerlerden biriyle eşleşiyor mu kontrol eder.
     // ref(): Farklı bir inputtaki veriyi çağırmaya yarar

     passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password')], 'Doğrulama şifresi asıl şifreyle eşleşmiyor')
        .required('Lütfen şifrenizi doğrulayın'),
});

export default schema;
