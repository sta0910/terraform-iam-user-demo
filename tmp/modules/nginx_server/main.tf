resource "aws_instance" "server" {
  ami = "ami-088b486f20fab3f0e"
  instance_type = var.instance_type

  tags = {
    "Name" = "TestWebServer" 
  }

user_data = <<EOF
#!/bin/bash
dnf install -y nginx
systemctl enable nginx
systemctl start nginx
EOF
}