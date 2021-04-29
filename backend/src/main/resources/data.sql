insert into user(id, username, password, role, enabled) values(10001, 'sarthak', '$2a$10$2.idZ2nE5.qShUr/LVL9X.lMiCYwZmWlAm8YcnoWbeW5stQajcpHK', 'user', true);

insert into todo(id, username, description, target_date, is_completed)
values(10001, 'sarthak', 'Learn to Network', sysdate(), false);

insert into todo(id, username, description, target_date, is_completed)
values(10002, 'sarthak', 'Learn to Dance', sysdate(), false);

insert into todo(id, username, description, target_date, is_completed)
values(10003, 'sarthak', 'Learn to talk to girls', sysdate(), false);
