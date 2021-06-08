import { types } from "mobx-state-tree";

const data = {
  name: "book",
  price: 28.00,
  image: "url"
}

export const WishListItem = types.model({
  name: types.string,
  price: types.number,
  image: types.optional(types.string, "")
})

export const WishList = types.model({
  items: types.optional(types.array(WishListItem), [])
})

