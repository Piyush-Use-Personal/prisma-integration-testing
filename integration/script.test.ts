import main, { prisma } from './../script';

describe("Integration test cases", () => {
  beforeEach(async () => {
    await prisma.user.deleteMany();
    await prisma.post.deleteMany();
  });
  afterAll(async () => {
    await prisma.$disconnect();
  });
  it("should match the after count", async () => {
    await main()
    const totalUser = await prisma.user.findMany()
    const totalPost = await prisma.post.findMany()
    expect(totalUser.length).toBe(2)
    expect(totalPost.length).toBe(4)
  });
});
