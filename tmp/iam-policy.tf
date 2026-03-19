#-----------------
# IAM Policy
#-----------------

resource "aws_iam_policy" "billng_deny" {
  name        = "${var.project}-${var.enviroment}-billing-deny-iam-policy"
  description = "Billing deny policy"
  policy      = data.aws_iam_policy_document.billng_deny.json
}

data "aws_iam_policy_document" "billng_deny" {
  statement {
    effect = "Deny"
    actions = [
      "aws-portal:*"
    ]
    resources = ["*"]
  }
}

resource "aws_iam_policy" "ec2-rebootable" {
  name        = "${var.project}-${var.enviroment}-rebootable-iam-policy"
  description = "EC2 rebootable policy"
  policy      = data.aws_iam_policy_document.ec2-rebootable.json
}

data "aws_iam_policy_document" "ec2-rebootable" {
  statement {
    effect = "Allow"
    actions = [
      "ec2:RebootInstance"
    ]
    resources = ["*"]
  }
}

resource "aws_iam_policy" "iam_change_own_password" {
  name        = "${var.project}-${var.enviroment}-iam_change_own_password-iam-policy"
  description = "iam_change_own_password policy"
  policy      = data.aws_iam_policy_document.iam_change_own_password.json
}

data "aws_iam_policy_document" "iam_change_own_password" {
  statement {
    effect = "Allow"
    actions = [
      "iam:ChangePassword"
    ]
    resources = ["arn:aws:iam::*:user/$${aws:username}"] #自分自身のパスワードを変更できる
  }
}