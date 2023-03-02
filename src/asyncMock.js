const products =  [
  { 
      id: '1', 
      name: 'Iphone 12', 
      price: 1000, 
      category: 'celular', 
      img:'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png',
      stock: 25, 
      description:'Pantalla 6.06 pulgadas en diagonal (el área real de visualización es menor).'
  }, 
  {  
      id: '2',
      name: 'Samsung s21',
      price: 800, 
      category: 'celular', 
      img:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG',
      stock: 16, 
      description:'Celular Samsung OctaCore... etc etc'
  },

  {   id: '3', 
      name: 'Ipad 8va generacion',
      price: 1200, 
      category: 'tablet',
      img:'https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw',
      stock: 10, 
      description:'PROCESADOR Apple A12 Bionic ALMACENAMIENTO 32 / 128 GB'
   },

   {  id: '4', 
      name: 'Notebok Gamer Asus',
      price: 1800, 
      category: 'notebook',
      img:'https://medias.musimundo.com/medias/00530008-145824-145824-01-145824-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w5NDY5NHxpbWFnZS9qcGVnfGg1OC9oMGQvMTA0MzMzNTk0Nzg4MTQvMDA1MzAwMDgtMTQ1ODI0LTE0NTgyNF8wMS0xNDU4MjRfMDEuanBnX3NpemU1MTV8ZDg1YjlhNDMyYWUzNjljMzQ5MzEzOTg0MmEyMTNiZGI3NTNhYjhiNDY0YmZjODhmN2U3MDNmMmY0N2JjNTFmMA',
      stock: 8,
      description:'Notebook Asus I5 8Gb Ram SSD 256GB'
   },
   {  id: '5', 
   name: 'Speaker Edifier',
   price: 1500, 
   category: 'Speaker',
   img:'https://http2.mlstatic.com/D_NQ_NP_2X_918556-MLA43558033140_092020-F.webp',
   stock: 0,
   description:'S2000MKIII New Classic Hi-Fi Active Speaker'
 },
   {  id: '6', 
      name: 'Headphones Sony',
      price: 500, 
      category: 'headphone',
      img:'https://arsonyb2c.vtexassets.com/arquivos/ids/359227-1600-auto?v=637834725382900000&width=1600&height=auto&aspect=true',
      stock: 19,
      description:'Auriculares inalámbricos "True Wireless" con Noise Cancelling 1000XM4'
    },
    {  id: '7', 
    name: 'Headphones Sony WF-1000XM4/BMUC',
    price: 345, 
    category: 'headphone',
    img:'https://arsonyb2c.vtexassets.com/arquivos/ids/357009-1600-auto?v=637588122166530000&width=1600&height=auto&aspect=true',
    stock: 34,
    description:'Auriculares inalámbricos "True Wireless" con Noise Cancelling WF-1000XM4'
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products)
      }, 500)
  })
}

export const getProductById = (id) => {
  return new Promise (resolve => {
      setTimeout(() => {
          resolve(products.find(prod => {
              return prod.id === id
          }))
      }, 500)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise (resolve => {
      setTimeout(() => {
          resolve(products.filter(prod => prod.category === categoryId))
      }, 500)
  })
}