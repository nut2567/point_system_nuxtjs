import { defineEventHandler, getRequestURL } from 'h3';
import fs from 'fs';
import moment from 'moment';

export default defineEventHandler((event) => {
  const request = event.node.req;
  const response = event.node.res;

  // ดึง IP address
  const ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress;

  // สร้าง message สำหรับ log รวม IP address
  const message = `${request.method} ${getRequestURL(event)} - IP: ${ip} : ${moment().format()}`;
  console.log(message);

  // เขียน log ลงไฟล์
  // fs.appendFile('logSys.txt', message + '\n', (err) => {
  //   if (err) {
  //     console.error("Error writing to log file", err);
  //     response.statusCode = 500;
  //     return response.end('Internal Server Error');
  //   }
  // });
});

