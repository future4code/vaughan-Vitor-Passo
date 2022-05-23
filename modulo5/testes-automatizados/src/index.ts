// import { Casino, LOCATION, NACIONALITY, Result, User } from "../model/IUser";

import { Casino, LOCATION, NACIONALITY, User } from "../model/IUser";

// // export const perfomPurchase = (user: User, value: number): User | undefined => {
// //   if (user.balance >= value) {
// //     return {
// //       ...user,
// //       balance: user.balance - value
// //     };
// //   }
// //   return undefined;
// // };
// export function verifyAge(casino: Casino, users: User[]): Result {
//   const unallowed: User[] = [];
//   const allowed: User[] = [];
//   for (const user of users) {
//     if (casino.location === LOCATION.EUA) {
//       if (user.age >= 21) {
//         allowed.push(user);
//       } else {
//         unallowed.push(user);
//       }
//     } else if (casino.location === LOCATION.BRAZIL) {
//       if (user.age >= 18) {
//         allowed.push(user);
//       } else {
//         unallowed.push(user);
//       }
//       break;
//     }
//   }
//  return {
//     brazilians: {
//       allowed: allowed
//         .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
//         .map((u) => u.name),
//       unallowed: unallowed
//         .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
//         .map((u) => u.name),
//     },
//     americans: {
//       allowed: allowed
//         .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
//         .map((u) => u.name),
//       unallowed: unallowed
//         .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
//         .map((u) => u.name),
//     },
//   };
// }

export function verifyAge(casino: Casino, users: User[]) {
  const allowed: User[] = [];
  const unallowed: User[] = [];

  for (const user of users) {
    if (casino.location === LOCATION.EUA) {
      if (user.age >= 21) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    } else if (casino.location === LOCATION.BRAZIL) {
      if (user.age >= 18) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
      break;
    }
  }

  return {
    brazilians: {
      allowed: allowed
        .filter(user => user.nacionality === NACIONALITY.BRAZILIAN)
        .map(u => u.name),
      unallowed: unallowed
        .filter(user => user.nacionality === NACIONALITY.BRAZILIAN)
        .map(u => u.name)
    },
    americans: {
      allowed: allowed
        .filter(user => user.nacionality === NACIONALITY.AMERICAN)
        .map(u => u.name),
      unallowed: unallowed
        .filter(user => user.nacionality === NACIONALITY.AMERICAN)
        .map(u => u.name)
    }
  };
}
