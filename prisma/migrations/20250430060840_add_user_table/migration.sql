-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bot" (
    "id" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Bot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BotSetting" (
    "id" TEXT NOT NULL,
    "bot_id" TEXT NOT NULL,
    "webhook" TEXT,
    "enabled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "BotSetting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WhatsappBusiness" (
    "id" TEXT NOT NULL,
    "access_token" TEXT,
    "phone_number_id" TEXT,
    "verify_token" TEXT,
    "test_recipient_phone" TEXT,
    "bot_setting_id" TEXT NOT NULL,

    CONSTRAINT "WhatsappBusiness_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BotSetting_bot_id_key" ON "BotSetting"("bot_id");

-- CreateIndex
CREATE UNIQUE INDEX "WhatsappBusiness_bot_setting_id_key" ON "WhatsappBusiness"("bot_setting_id");

-- AddForeignKey
ALTER TABLE "BotSetting" ADD CONSTRAINT "BotSetting_bot_id_fkey" FOREIGN KEY ("bot_id") REFERENCES "Bot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WhatsappBusiness" ADD CONSTRAINT "WhatsappBusiness_bot_setting_id_fkey" FOREIGN KEY ("bot_setting_id") REFERENCES "BotSetting"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
