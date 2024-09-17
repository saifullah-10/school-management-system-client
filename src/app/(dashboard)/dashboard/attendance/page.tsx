// "use client";

// import {
//   Box,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";
// import { useState, useMemo, useEffect } from "react";
// import { useQuery } from "@tanstack/react-query";
// import axiosInstance from "@/lib/axios";
// import { FaCheck } from "react-icons/fa";
// import { ImCross } from "react-icons/im";
// import { GoDash } from "react-icons/go";
// import AttendanceInput from "@/components/attendance/AttendanceInput";
// import { useAuth } from "@/contextProvider/ContextProvider";

// interface AttendanceRecord {
//   name: string;
//   attendance: Record<string, Record<string, "P" | "A" | "-">>;
// }

// const fetchAttendanceRecords = async (): Promise<AttendanceRecord[]> => {
//   const response = await axiosInstance.get("/attendance");
//   return response.data;
// };

// export default function AttendancePage() {


  
//   const {
//     data: records = [],
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["attendanceRecords"],
//     queryFn: fetchAttendanceRecords,
//   });

//   // // Set selectedName based on user role
//   // useEffect(() => {
//   //   if (user?.role === "student") {
//   //     setSelectedName(user.username);
//   //   }
//   // }, [user]);

//   const names = records.map((record) => record.name);

//   // Memoize sorted dates to avoid unnecessary recalculations
//   const dates = useMemo(() => {
//     const allDates = Array.from(
//       new Set(records.flatMap((record) => Object.keys(record.attendance || {})))
//     );
//     // Sort dates in ascending order
//     return allDates.sort(
//       (a, b) => new Date(b).getTime() - new Date(a).getTime()
//     );
//   }, [records]);

//   const courses =
//     records.length > 0
//       ? Array.from(
//           new Set(
//             Object.values(records[0].attendance || {}).flatMap((courseData) =>
//               Object.keys(courseData)
//             )
//           )
//         )
//       : [];
//       const auth = useAuth()

//       if(auth === null){
//         return <div>Loading</div>
//       }
//         const { user } = auth;
//   const selectedRecord = records.find(
//     (record) => record.name === user?.username
//   ) || { attendance: {} as Record<string, Record<string, "P" | "A" | "-">> };

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data: {error.message}</p>;

//   return (
//     <Box>
//       <h1 className="text-2xl text-center font-bold mb-4">
//         Attendance of Students
//       </h1>

//       {user?.role === "student" ? null : <AttendanceInput />}

//       <Box mb={4} display="flex" alignItems="center">
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="name-select-label">Name</InputLabel>
//           <Select
//             labelId="name-select-label"
//             value={user?.username}
//             onChange={(e) => setSelectedName(e.target.value)}
//             label="Name"
//             disabled={user?.role === "student"} // Disable if role is 'student'
//           >
//             {names.map((name) => (
//               <MenuItem key={name} value={name}>
//                 {name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </Box>

//       <TableContainer
//         component={Paper}
//         sx={{
//           width: { xs: "86vw", sm: "62vw", md: "70vw", lg: "77vw" },
//           overflowX: "auto",
//           margin: "0 auto",
//         }}
//       >
//         <Table stickyHeader>
//           <TableHead>
//             <TableRow>
//               <TableCell>Date</TableCell>
//               {courses.map((course) => (
//                 <TableCell key={course} align="center">
//                   {course}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {dates.map((date) => (
//               <TableRow key={date}>
//                 <TableCell>{date}</TableCell>
//                 {courses.map((course) => (
//                   <TableCell key={course} align="center">
//                     {selectedRecord.attendance[date]?.[course] === "P" ? (
//                       <FaCheck color="green" />
//                     ) : selectedRecord.attendance[date]?.[course] === "A" ? (
//                       <ImCross color="red" />
//                     ) : (
//                       <GoDash />
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// }


const AttendancePage = () => {
  return (
    <div>AttendancePage</div>
  )
}

export default AttendancePage