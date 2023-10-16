class EnrollmentAdapter {
  static toBackend(frontendData) {
    const { subjectTimesTaken, leadId, course } = frontendData;

    const backendData = {
      lead_id: leadId,
      course_id: course.id,
      subject_times_taken: subjectTimesTaken,
    };

    return backendData;
  }
  static toFrontend(backendData) {
    const {
      id,
      lead_id: leadId,
      course_id: courseId,
      subject_times_taken: subjectTimesTaken,
    } = backendData;

    const frontendData = {
      id,
      leadId,
      courseId,
      subjectTimesTaken,
    };
    return frontendData;
  }
}

export default EnrollmentAdapter;
