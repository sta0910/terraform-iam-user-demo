terraform {
  required_version = ">0.13"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">3.0"
    }
  }
  backend "s3" {
    bucket  = "tastylog-tfstate-bucket-sota-takahashi"
    key     = "tastylog-user.tfstate"
    region  = "ap-northeast-1"
    profile = "terraform"
  }
}

provider "aws" {
  profile = "terraform"
  region  = "ap-northeast-1"
}

# resource "aws_iam_user" "user" {
#   count = 2
#   name  = "testuser-${count.index}"
# }

# resource "aws_vpc" "vpc" {
#   cidr_block = "192.168.0.0/20"
# }

# resource "aws_subnet" "subnet" {
#   for_each = {
#     "192.168.1.0/24" = "ap-northeast-1a"
#     "192.168.2.0/24" = "ap-northeast-1c"
#     "192.168.3.0/24" = "ap-northeast-1d"
#   }

#   vpc_id            = aws_vpc.vpc.id
#   cidr_block        = each.key
#   availability_zone = each.value
# }

module "webserver" {
  source        = "./modules/nginx_server"
  instance_type = "t2.micro"
}

output "web_server_id" {
  value = module.webserver.instance_id
}

# ---------------------------------------------
# Variables
# ---------------------------------------------
variable "obj" {
  type = object({
    name = string
    age  = number
  })
  default = {
    name = "tanaka"
    age  = 28
  }
}

variable "tuple" {
  type = tuple([
    string, number
  ])
  default = ["tanaka", 28]
}

variable "list" {
  type    = list(string)
  default = ["tanaka", "sato"]
}

variable "map" {
  type = map(string)
  default = {
    "High" = "m5.2xlarge"
    "Mid"  = "m5.large"
    "Low"  = "t2.micro"
  }
}

variable "set" {
  type = set(string)
  default = [
    "tanaka",
    "sato",
    "tanaka",
    "sato"
  ]
}

variable "message" {
  type    = string
  default = ""
}

variable "project" {
  type = string
}

variable "enviroment" {
  type = string
}

variable "user_name" {
  type = string

}