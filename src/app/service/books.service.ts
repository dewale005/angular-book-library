import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class BooksService {
  public books = [
    {
      id: 'intelligent-fresh-salad',
      title: 'Intelligent Fresh Salad',
      price: '674.00',
      description:
        'Ex dolor aut et sequi temporibus maxime recusandae nulla dolores. Dolorem officiis mollitia magnam qui voluptatem. Voluptates ratione et voluptatum et labore quam assumenda. Fugit placeat est molestiae omnis adipisci qui tempore facilis nostrum. Doloremque quis iusto cum sit ipsam vero.',
      authur: 'Eino Cummerata',
      image: 'http://covers.openlibrary.org/b/id/0000000010-L.jpg',
      DateAdded:
        'Sun Apr 19 2020 11:58:53 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'awesome-soft-bike',
      title: 'Awesome Soft Bike',
      price: '2636.00',
      description:
        'Laboriosam aut autem sed consequatur id blanditiis consequatur autem quas. Fugiat non et animi. Officia dignissimos in ea est quidem. Explicabo deleniti impedit reprehenderit non praesentium perspiciatis nihil minus. Qui voluptatibus quos quos vel est.',
      authur: 'Crawford Considine',
      image: 'http://covers.openlibrary.org/b/id/0000000011-L.jpg',
      DateAdded:
        'Tue Apr 07 2020 13:19:53 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'licensed-wooden-fish',
      title: 'Licensed Wooden Fish',
      price: '1538.00',
      description:
        'Quam repellat tenetur. Beatae possimus cumque dolore iusto laboriosam quia iure. Quae et corporis ut occaecati architecto illum et enim. Quia blanditiis quod quas quis voluptatem libero ut dolorum rerum. Quidem quia corrupti eligendi beatae qui voluptatem.',
      authur: 'Jefferey Stokes',
      image: 'http://covers.openlibrary.org/b/id/0000000012-L.jpg',
      DateAdded:
        'Tue Apr 14 2020 01:35:32 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'handmade-frozen-table',
      title: 'Handmade Frozen Table',
      price: '2176.00',
      description:
        'Atque fugiat eum odio incidunt dolores ad. Consectetur sint autem incidunt aut harum perferendis. Ut et quidem. Sit incidunt dolor sed. Pariatur aut in voluptate dicta odit.',
      authur: 'Merl Cronin',
      image: 'http://covers.openlibrary.org/b/id/0000000013-L.jpg',
      DateAdded:
        'Thu Apr 09 2020 18:28:17 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'ergonomic-soft-keyboard',
      title: 'Ergonomic Soft Keyboard',
      price: '2206.00',
      description:
        'Quo veritatis sit. Dolorum quo praesentium. Possimus illo modi illo. Vel et magni aut. Eum minima odit et et.',
      authur: 'Danyka Hickle',
      image: 'http://covers.openlibrary.org/b/id/0000000014-L.jpg',
      DateAdded:
        'Wed Apr 22 2020 01:42:51 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'rustic-frozen-mouse',
      title: 'Rustic Frozen Mouse',
      price: '2026.00',
      description:
        'Rem libero sint quaerat blanditiis perferendis recusandae sunt molestiae. Possimus animi cum enim. Et fuga eius id nobis. Eius eos debitis laboriosam. Et reiciendis aut velit aut deleniti id inventore omnis.',
      authur: 'Piper Hand',
      image: 'http://covers.openlibrary.org/b/id/0000000015-L.jpg',
      DateAdded:
        'Tue Apr 21 2020 22:03:21 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'handmade-plastic-shoes',
      title: 'Handmade Plastic Shoes',
      price: '2871.00',
      description:
        'Rem reiciendis eos. Placeat nobis similique vero sit. Vitae quis sequi dolorem sit sint ea. Velit delectus non ad voluptatem est qui. Sit ut est iusto ut ipsum provident.',
      authur: 'Richmond Bechtelar',
      image: 'http://covers.openlibrary.org/b/id/0000000016-L.jpg',
      DateAdded:
        'Sat Apr 11 2020 15:35:29 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'licensed-steel-bacon',
      title: 'Licensed Steel Bacon',
      price: '2100.00',
      description:
        'Labore et consequatur qui aut accusantium dolorem et. Facere et non non qui id eum. Et nesciunt rerum voluptatibus neque. Aliquam aliquam optio blanditiis eum non laboriosam beatae cum. Velit animi quis illo quo corporis molestias alias et.',
      authur: 'Connor Nitzsche',
      image: 'http://covers.openlibrary.org/b/id/0000000017-L.jpg',
      DateAdded:
        'Thu Apr 09 2020 04:39:14 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'intelligent-steel-sausages',
      title: 'Intelligent Steel Sausages',
      price: '976.00',
      description:
        'Quo quam laborum accusantium quaerat natus ut iusto veniam. Expedita sed nihil doloribus. Quasi non vero. Non et velit dignissimos aperiam iusto eveniet eos ipsam. Pariatur voluptatibus quisquam alias iusto eum ducimus nam.',
      authur: 'Eldridge Murphy',
      image: 'http://covers.openlibrary.org/b/id/0000000018-L.jpg',
      DateAdded:
        'Thu Apr 09 2020 00:47:02 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'licensed-metal-table',
      title: 'Licensed Metal Table',
      price: '2747.00',
      description:
        'Sit perferendis et consequatur. Voluptas impedit maxime asperiores excepturi ea ipsum molestiae sed. Suscipit tenetur sapiente quas. Odit ut corporis. Alias id porro laboriosam sed consectetur voluptatem.',
      authur: 'Angel Considine',
      image: 'http://covers.openlibrary.org/b/id/0000000019-L.jpg',
      DateAdded:
        'Sun Apr 19 2020 15:26:44 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'tasty-granite-salad',
      title: 'Tasty Granite Salad',
      price: '2323.00',
      description:
        'Beatae aut aspernatur. Delectus velit quia ut sit et quia. Ab omnis dicta aut eos. Ex libero saepe nobis et ipsam ratione eveniet velit. Aut voluptate sit ut.',
      authur: 'Aiden Hyatt',
      image: 'http://covers.openlibrary.org/b/id/00000000110-L.jpg',
      DateAdded:
        'Sun Apr 19 2020 15:02:36 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'fantastic-plastic-shirt',
      title: 'Fantastic Plastic Shirt',
      price: '1189.00',
      description:
        'Consequatur blanditiis sint minima. Cupiditate alias est exercitationem quod. Repellendus magnam et quaerat itaque non et accusamus in. Iusto sit repellendus ea modi. Ipsam nihil et magnam.',
      authur: 'Favian Romaguera',
      image: 'http://covers.openlibrary.org/b/id/00000000111-L.jpg',
      DateAdded:
        'Thu Apr 09 2020 15:28:11 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'handmade-rubber-chicken',
      title: 'Handmade Rubber Chicken',
      price: '2925.00',
      description:
        'Culpa totam ad esse omnis pariatur consequuntur id. Aut sint quas dolorem quibusdam. Quia molestias ut inventore sint et. Esse consectetur quis consectetur aliquid. Quia et quas nesciunt et quo quia.',
      authur: 'Hollis Gutmann',
      image: 'http://covers.openlibrary.org/b/id/00000000112-L.jpg',
      DateAdded:
        'Tue Apr 07 2020 17:21:08 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'gorgeous-soft-shoes',
      title: 'Gorgeous Soft Shoes',
      price: '766.00',
      description:
        'Natus amet atque eos magni mollitia consectetur sed non autem. Aliquam et laboriosam perferendis expedita facere adipisci mollitia consequatur. Quos incidunt iure iusto distinctio nam nesciunt veniam vero atque. Occaecati ex quaerat quia dolores reiciendis inventore natus. Impedit ut doloribus officia molestias architecto.',
      authur: 'Brenden Harris',
      image: 'http://covers.openlibrary.org/b/id/00000000113-L.jpg',
      DateAdded:
        'Wed Apr 08 2020 03:53:19 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'small-fresh-tuna',
      title: 'Small Fresh Tuna',
      price: '2963.00',
      description:
        'Voluptatem provident rem blanditiis enim sunt nobis cum omnis. Necessitatibus veritatis voluptas consequatur necessitatibus repellendus. Totam perspiciatis inventore corporis voluptas velit odio repellat et. Sit asperiores sed rerum. Non quia unde ratione sed voluptatem natus et qui dolores.',
      authur: 'Hollie McDermott',
      image: 'http://covers.openlibrary.org/b/id/00000000114-L.jpg',
      DateAdded:
        'Tue Apr 21 2020 11:39:51 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'practical-fresh-table',
      title: 'Practical Fresh Table',
      price: '2032.00',
      description:
        'Dolor eos quia asperiores sint officiis ut. Et ut est voluptatibus nihil rem rerum beatae. Exercitationem error cupiditate assumenda tenetur. Quasi beatae labore soluta quaerat sapiente. Ab recusandae a eos quaerat ea quia.',
      authur: 'Susana Hoeger',
      image: 'http://covers.openlibrary.org/b/id/00000000115-L.jpg',
      DateAdded:
        'Tue Apr 21 2020 00:19:44 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'incredible-metal-shoes',
      title: 'Incredible Metal Shoes',
      price: '2311.00',
      description:
        'Deserunt nisi repellat eum minima ipsum. Dolorum numquam soluta soluta nemo pariatur quasi aliquid possimus inventore. Illo aut adipisci corrupti nihil esse. Quis officiis nobis illum consequatur aut. Quod vitae fuga non et impedit.',
      authur: 'Susan Christiansen',
      image: 'http://covers.openlibrary.org/b/id/00000000116-L.jpg',
      DateAdded:
        'Tue Apr 14 2020 01:55:22 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'fantastic-fresh-bike',
      title: 'Fantastic Fresh Bike',
      price: '2019.00',
      description:
        'Voluptas totam perferendis est ut autem molestiae et accusantium impedit. Porro recusandae quasi nihil earum et corrupti beatae. Exercitationem in omnis fuga non voluptate similique modi nisi libero. Deleniti nihil et laudantium et porro. Omnis et nemo minima et excepturi.',
      authur: 'Albina Satterfield',
      image: 'http://covers.openlibrary.org/b/id/00000000117-L.jpg',
      DateAdded:
        'Wed Apr 22 2020 16:05:09 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'handcrafted-wooden-hat',
      title: 'Handcrafted Wooden Hat',
      price: '2421.00',
      description:
        'At cum aut commodi mollitia ea. Minus repellendus voluptatibus sit tempore est. Magni voluptatem ipsa minus natus. Et sed nihil in harum dolorem totam laboriosam a. Impedit in quia voluptatem voluptas.',
      authur: 'Christ Pfannerstill',
      image: 'http://covers.openlibrary.org/b/id/00000000118-L.jpg',
      DateAdded:
        'Mon Apr 13 2020 14:18:38 GMT+0100 (West Africa Standard Time)',
    },
    {
      id: 'unbranded-plastic-pants',
      title: 'Unbranded Plastic Pants',
      price: '603.00',
      description:
        'Laboriosam autem eligendi officia voluptatum temporibus nemo. Qui qui quae et quibusdam ut eum et est. Velit qui in amet adipisci voluptates quia totam. Itaque ad in repudiandae et et repudiandae voluptatibus. Minus est praesentium facilis nostrum atque necessitatibus saepe.',
      authur: 'Mellie Langosh',
      image: 'http://covers.openlibrary.org/b/id/00000000119-L.jpg',
      DateAdded:
        'Mon Apr 20 2020 17:47:04 GMT+0100 (West Africa Standard Time)',
    },
  ];
  constructor() {}

  getAllBook() {
    return this.books;
  }

  addBook(payload) {
    this.books.push(payload);
  }

  editBook(id, payload) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === id) {
        this.books[i] = payload;
      }
    }
  }

  deleteBook(id) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === id) {
        this.books.splice(i, 1);
      }
    }
  }
}
