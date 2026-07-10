// test('sanity check', () => {
//   expect(1 + 1).toBe(2);
  
// });

test('sanity check', () => {
  if (!process.env.API_KEY) {
    throw new Error('API_KEY is missing!');
  }
  expect(1 + 1).toBe(2);
});