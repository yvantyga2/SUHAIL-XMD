const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_38_12_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQwLFxuICAgICAgICA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MixcbiAgICAgICAgMTU3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjksXG4gICAgICAgIDYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDgyLFxuICAgICAgICA2OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NixcbiAgICAgICAgMTcyLFxuICAgICAgICAzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NixcbiAgICAgICAgMTk4LFxuICAgICAgICA5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3LFxuICAgICAgICA1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExLFxuICAgICAgICA5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNixcbiAgICAgICAgOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkc1dGo4eisySFRLT3dvWitqWkYrRkNCTERxSGw0NFBoV3pWRTNGQnFweHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI1ODg0MDA1NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFFNkYzNzRDN0NDNzVDMjA0RkE3QkZCNTQ3NkI0RjEzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDI2MjcxMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTg4NDAwNTczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5OUVBQ0Q3RjRERTkyMzU0Mzk0QjBBRjBBMkJBMzlDQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQyNjI3MTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOTY5TDBfbWJTM0NUemxEQ0Z2WjFnZ1wiLFxuICBcInBob25lSWRcIjogXCIxMmZiYWIwNi02Y2NkLTRkNTctODgwOC1iNWQwYTU4MjVjNTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNyxcbiAgICAgIDIwMCxcbiAgICAgIDIxMCxcbiAgICAgIDIyMSxcbiAgICAgIDU3LFxuICAgICAgMTE2LFxuICAgICAgMjIsXG4gICAgICAxMzcsXG4gICAgICAyMDksXG4gICAgICA0NixcbiAgICAgIDY3LFxuICAgICAgMTQ5LFxuICAgICAgMTcyLFxuICAgICAgMjM4LFxuICAgICAgMTUsXG4gICAgICA1MCxcbiAgICAgIDI3LFxuICAgICAgMCxcbiAgICAgIDUzLFxuICAgICAgMTEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzEsXG4gICAgICAxNTksXG4gICAgICAyNixcbiAgICAgIDE3NSxcbiAgICAgIDE1OCxcbiAgICAgIDEzOCxcbiAgICAgIDgzLFxuICAgICAgMjAyLFxuICAgICAgMTUsXG4gICAgICAxNzQsXG4gICAgICAxMDQsXG4gICAgICA2MyxcbiAgICAgIDEzLFxuICAgICAgMTUsXG4gICAgICAyMzgsXG4gICAgICAyMzEsXG4gICAgICA3NCxcbiAgICAgIDE2NixcbiAgICAgIDEwLFxuICAgICAgMjUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUCt1K2JFRUVLLy8rcm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSNDJLbWZqR3U4ZHEvbHd5RmJQWkdtUmFZTm80NEc1Sm1qUXNiVjZWSnpNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhvbFJUZWdLWCt0UGdNMEl0SGIxRXRnVDFjRzU1OHZ0bzAzSGFZSk1tNXFvaDE0Tm5CelMyOFp6VDV4Nld1aW55d0c2T05sQ1BJYitCL1ZjeVZOV0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZRdjlUV205dG1GNWFQZk9CRC9RTWliOTI2Ymo4RkVzOG9kRklzVzJCajNhS21DRDNvRnBONEt3QjUrVHJZOWRPeXJGMnR2OFJZMlJMMHJ2WnI1U0RnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1ODg0MDA1NzM6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MjEyOTQ2MzQzOTM5MTozMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLgppTgp6PNoc2c4oOfzaLNoeGNnfCdmL7wn5GR4oOf4oOd8J2ZieGsvOKDn/CfnIvwnZGoz4jwnZKC8J2Sj8O48J2SjOC5j/CdkovJqFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1ODg0MDA1NzM6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MjYyNzA3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRmE3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGYTcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqSHFxR2MvczVtRXEydHJlMEswVjhTU2J6VXljZTVZN2trbWFmell2R1V3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNzg0OTA3NTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDI2MjcxMDczMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "ঔৣ͜͡⃟፝͢͡𝘾👑⃟⃝𝙉ᬼ⃟🜋𝑨ψ𝒂𝒏ø𝒌๏𝒋ɨ",
  packname: process.env.PACK_NAME || "ঔৣ͜͡⃟፝͢͡𝘾👑⃟⃝𝙉ᬼ⃟🜋𝑨ψ𝒂𝒏ø𝒌๏𝒋ɨ",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
