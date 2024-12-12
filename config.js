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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_51_12_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDg0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDM1LFxuICAgICAgICA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MixcbiAgICAgICAgMTc4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NCxcbiAgICAgICAgODksXG4gICAgICAgIDQyLFxuICAgICAgICA2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE3LFxuICAgICAgICA0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2LFxuICAgICAgICA1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM2LFxuICAgICAgICA1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDM4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgzLFxuICAgICAgICA2OSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDksXG4gICAgICAgIDk4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI5LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRVjk1YkxDV3NUZ2xKeW4zcHMvdHh0dXJSbkdBVHpCblhQcGFxdXYrT1dnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0TWcyR3JhQVRaMnBjZTM3emZJbVpRXCIsXG4gIFwicGhvbmVJZFwiOiBcImU4OThiMmQ5LTdiMjEtNDk4NS05ZGY2LTY4YjU2ZDJjNjYzNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NCxcbiAgICAgIDEwLFxuICAgICAgNDYsXG4gICAgICAxNjksXG4gICAgICA2MyxcbiAgICAgIDI4LFxuICAgICAgMjUwLFxuICAgICAgOTgsXG4gICAgICA2MCxcbiAgICAgIDEzNixcbiAgICAgIDUyLFxuICAgICAgNTUsXG4gICAgICAxMzksXG4gICAgICAxNzMsXG4gICAgICAyMzcsXG4gICAgICAyNDYsXG4gICAgICAxNjAsXG4gICAgICA0LFxuICAgICAgMTU0LFxuICAgICAgMTEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjksXG4gICAgICAyMzQsXG4gICAgICAxNjgsXG4gICAgICAxNjksXG4gICAgICAyNCxcbiAgICAgIDE1NSxcbiAgICAgIDEsXG4gICAgICAyNDcsXG4gICAgICAxMzEsXG4gICAgICA0MixcbiAgICAgIDI0MyxcbiAgICAgIDE1OCxcbiAgICAgIDIzNSxcbiAgICAgIDIyNixcbiAgICAgIDc2LFxuICAgICAgMTAwLFxuICAgICAgMTc1LFxuICAgICAgMTA2LFxuICAgICAgMjUzLFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSitydHNjR0VObnc2N29HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHNEhHRThpZ051Sm55aFJDa2tOUTBuTnhxU1NUSHFZazVFVFFQUmxXWUZzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRCcHEzaTUyVGVLK05nL3BNVWhHMW94cmxRQUNQVjYvYklDOGxid1pIL3pDdzM2MHlOU2psS2NSeUFzaHhGM2cyTWRBVTBsN2NTc0hRR25GbS8rUkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlXNjJKZFpYQW9WNGdyVWVOdDlxc2IxbGczdktsSlVtakduQm5HQ3l2akhXUDFDSHBoRWVRTU83ZHFPOXo3RlJLTWpwRDZHUXZnb05FUUhlR1F1ZkFnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1ODg0MDA1NzM6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MjEyOTQ2MzQzOTM5MTozMUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTg4NDAwNTczOjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQwMTUwNjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGUjhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZSOC5qc29uIjogIntcImtleURhdGFcIjpcIitjdWEvbU5yS1JGVE1zUGUxVUM1cVpCNVp6STlkTVJiTFpjVXljRmtSYzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc2MDQwMDc5OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0MDE1MDczOTE5XCJ9Igp9"  // PUT your SESSION_ID 


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
