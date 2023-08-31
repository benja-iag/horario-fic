import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { Course } from "../types/courses";

type UserCardProps = {
  course: Course;
};
export const CourseCard = ({ course, ...props }: UserCardProps) => {
  return (
    <Card {...props} sx={{ bgcolor: "#F3F6F9", m: 3 }}>
      <CardContent>
        <Typography component={"span"}>
          {course.course} - Seccion: {course.section}
        </Typography>
        <div>
          <Typography color={"text.primary"} sx={{ display: "inline-block" }}>
            Docente: {course.teacher}
          </Typography>
        </div>
        <Typography color={"text.secondary"} component={"div"}>
          {course.day} {course.start} - {course.finish} <br />
          {course.place}
        </Typography>
        <Typography color={"text.primary"}>
          <Button variant="contained" color="primary">
            Más Detalles
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
};
