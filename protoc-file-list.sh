# /bin/bash

ls -1 $(grep -slR 'message Msg' ./cosmos-sdk/proto | egrep '\.proto$') \
    $(grep -slR 'message Msg' ./cosmos-sdk/third_party/proto | egrep '\.proto$') \
    $(grep -slR 'message Msg' ./ibc-go/proto | egrep '\.proto$') \
    $(grep -slR 'message Msg' ./juno/proto | egrep '\.proto$') \
    $(grep -slR 'message Msg' ./wasmd/proto | egrep '\.proto$') \
    | sort | uniq
