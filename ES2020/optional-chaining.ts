
type User = {
  profile?: {
    address?: {
      city?: string;
    };
  };
  getBio?: () => string;
};

const user: User = {};

// Без optional chaining:
// const city = user && user.profile && user.profile.address && user.profile.address.city;

// С optional chaining:
const city = user?.profile?.address?.city;
console.log(city); // undefined, не падает с ошибкой

// Работает и с методами
const bio = user.getBio?.();
console.log(bio); // undefined
