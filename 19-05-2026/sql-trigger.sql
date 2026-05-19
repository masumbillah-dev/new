drop table if exists student_logs;
create table if not exists student_logs(
    id int unsigned primary key auto_increment,
    student_id int,
    status varchar(20),
    time timestamp,
    -- created_at datetime

);

---Trigger---

drop trigger if exists add_student;
create trigger add_student
after insert on students
for each row
insert into student_logs(student_id,status,time)
values(new.id,'inserted',now());


insert into students(full_name,email)
values('Aysha','Aysa@Aysu.com');

select * from student_logs;

drop trigger if exists remove_student;
create trigger remove_student
after delete on students
for each row
insert into student_logs(student_id,status,time)
values(old.id,'deleted',now());

drop trigger if exists update_student;
create trigger update_student
after update on students
for each row
insert into student_logs(student_id,status,time)
values(old.id,'updated',now());

update students set full_name='Ali' where id=1;


alter table student_logs drop column created_at;