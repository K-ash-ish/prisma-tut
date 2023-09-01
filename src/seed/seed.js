const { prisma } = require("@/db/prisma");
const { hash } = require("@/utils/hash");

export const createAdminUser = async () => {
  const adminPassword = "admin";
  const passwordHash = await hash(adminPassword);
  const admin = await prisma.admin.findFirst({
    where: {
      email: {
        equals: "admin@test.com",
      },
    },
  });
  if (admin) {
    return "Admin already exist";
  }
  await prisma.admin.create({
    data: {
      email: "admin@test.com",
      password: passwordHash,
    },
  });
  return "Admin added to DB";
};
