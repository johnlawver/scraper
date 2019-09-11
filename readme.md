# Connector for Gsuite and Jira

#### The goal of this script is to automate as much of the process of creating gsite accounts. The initial goal is to accomplish all of the following

- create webhook that announces when new hire ticket is created
- pull json from new hire ticket
- extract all relevant fields from json data and clean
- generate secure temp password for new employees
- determine external vs internal emnployee
- populate displayname and email based on hr rules
- put user in proper ou
- provide correct manager
- create CSV

v0.1

> Basic proof of concept that takes name and returns CSV for Bettercloud bulk update.
