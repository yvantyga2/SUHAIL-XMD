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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_05_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDMxLFxuICAgICAgICA4NixcbiAgICAgICAgNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NixcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDMyLFxuICAgICAgICAyLFxuICAgICAgICA2MyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMzksXG4gICAgICAgIDI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMxLFxuICAgICAgICA4MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxODgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDkyLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDQzLFxuICAgICAgICAzMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNixcbiAgICAgICAgODksXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDc0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDkwLFxuICAgICAgICAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4LFxuICAgICAgICA0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDczLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNZFd4ZXRxcFllbTI2K0lsSHFWTExYeWdXVHdzTjBpZ2U0MjFYSW1FSUZnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEWkZnMmk2RlNzbS1fcUtrZmo1M0pBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUxNWI1YWI4LWU3M2YtNDQxNS1hZGMwLWI1ZWVkZWI1ZDdiOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTQsXG4gICAgICAyMCxcbiAgICAgIDIwMSxcbiAgICAgIDAsXG4gICAgICA5LFxuICAgICAgMTE4LFxuICAgICAgNjgsXG4gICAgICAxMzYsXG4gICAgICAyMTYsXG4gICAgICAxNjksXG4gICAgICAxOTEsXG4gICAgICAxNzUsXG4gICAgICAyMDUsXG4gICAgICAxNTQsXG4gICAgICAxMjUsXG4gICAgICA1MixcbiAgICAgIDE0MixcbiAgICAgIDE3NSxcbiAgICAgIDQ3LFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDExMyxcbiAgICAgIDE0OCxcbiAgICAgIDE0OSxcbiAgICAgIDY1LFxuICAgICAgMTY0LFxuICAgICAgNzEsXG4gICAgICA1LFxuICAgICAgMTQ0LFxuICAgICAgMTgwLFxuICAgICAgMTcxLFxuICAgICAgMTMxLFxuICAgICAgMTIyLFxuICAgICAgMTg3LFxuICAgICAgMTU4LFxuICAgICAgMTAsXG4gICAgICA0NixcbiAgICAgIDE1NixcbiAgICAgIDE0NyxcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjZydHNjR0VQck14TG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHNEhHRThpZ051Sm55aFJDa2tOUTBuTnhxU1NUSHFZazVFVFFQUmxXWUZzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVhVXZ2b1dNV2FuUE0vSURkTVNiVnc4d0F6bytLbnlTbWdHSW5rdUExbStSOUMrTXBhbksrTVdCRmV3d2xGaGlYR2FJS1ZEanJhUHBXbGVhbmg4dUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFaYW12Y1JlcThqYXZERWZkUy8yczJhV2NlYW0wSWFjN3VyV25pL0RzTVhjVjIya2V3VVprVU9rN3UyNWNMR3Y0RUZRMzR6SUc3NDFyQjJjZ1BzbWhnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1ODg0MDA1NzM6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MjEyOTQ2MzQzOTM5MToyNkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTg4NDAwNTczOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMzNzE1MjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDVC9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNUKy5qc29uIjogIntcImtleURhdGFcIjpcIkxneU9aL2hDa0RpNk9VRzRnd1VzNld3UVhUK256Vmc4V2JQNU84K29zU009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc2MDQwMDc5NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1RfXy5qc29uIjogIntcImtleURhdGFcIjpcIjJLU2VlSkx2RDRzUEJTY01uRXZUNktBeFhIT3FSMmJRWmRyYS92US80dzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc2MDQwMDc5NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzM3MTUwNTQwOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
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
