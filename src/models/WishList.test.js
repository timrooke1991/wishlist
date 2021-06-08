import { WishListItem, WishList  } from "./WishList";

it("can create a instance of a model", () => {
  const item = WishListItem.create({
    name: "book",
    price: 28.00,
    image: "url"
  });

  expect(item.price).toBe(28.00);
  expect(item.name).toBe("book");
})

it('can create a wishlist', () => {
  const list = WishList.create({
    items: [
      {
        name: "book",
        price: 28.00
      }
    ]
  })

  expect(list.items.length).toBe(1);
  expect(list.items[0].price).toBe(28.00);
})
