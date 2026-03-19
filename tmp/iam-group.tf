#-----------------
# IAM Group Policy
#-----------------
resource "aws_iam_group" "devlopers" {
  name = "Developers"
}

resource "aws_iam_group_policy_attachment" "developers_readonly_policy" {
  group      = aws_iam_group.devlopers.name
  policy_arn = "arn:aws:iam::aws:policy/ReadOnlyAccess"
}

resource "aws_iam_group_policy_attachment" "developers_billing_deny" {
  group      = aws_iam_group.devlopers.name
  policy_arn = aws_iam_policy.billng_deny.arn
}

resource "aws_iam_group_policy_attachment" "developers_ec2-rebootable" {
  group      = aws_iam_group.devlopers.name
  policy_arn = aws_iam_policy.ec2-rebootable.arn
}

resource "aws_iam_group_policy_attachment" "developers_iam_change_own_password" {
  group      = aws_iam_group.devlopers.name
  policy_arn = aws_iam_policy.iam_change_own_password.arn
}