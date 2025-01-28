async function main(){
    const {default:fetch} = await import('node-fetch');
    const res = await fetch("https://leetcode.com/graphql/", {
        "headers": {
          "accept": "*/*",
          "content-type": "application/json",
          
          "accept-language": "en-US,en;q=0.9",
          "authorization": "",
          "baggage": "sentry-environment=production,sentry-release=d6bdb498,sentry-transaction=%2Fu%2F%5Busername%5D,sentry-public_key=2a051f9838e2450fbdd5a77eb62cc83c,sentry-trace_id=b2ee137d070d4357bc044b76f035e346,sentry-sample_rate=0.03",
          
          "random-uuid": "71d5c0de-6960-c8b9-8d2d-00d7b54e6dbb",
          "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "sentry-trace": "b2ee137d070d4357bc044b76f035e346-b1e9e2bd2693543c-0",
          "x-csrftoken": "KVzn8as6eMVRC8CNQmlB53Of1LoJE9iMHGlys3YuveRO9C6asw9r0cVllnfZpvfT",
          "cookie": "csrftoken=KVzn8as6eMVRC8CNQmlB53Of1LoJE9iMHGlys3YuveRO9C6asw9r0cVllnfZpvfT; _gid=GA1.2.668059551.1695383237; _gat=1; _ga_CDRWKZTDEX=GS1.1.1695383237.1.0.1695383237.60.0.0; _ga=GA1.1.253433466.1695383237; gr_user_id=b28f30ae-79d5-4a4d-9b73-0ba8fcd171f6; 87b5a3c3f1a55520_gr_session_id=6c90599c-dee2-48dc-a73a-6bf4ebecb2ba; 87b5a3c3f1a55520_gr_session_id_sent_vst=6c90599c-dee2-48dc-a73a-6bf4ebecb2ba; _dd_s=rum=0&expire=1695384137762",
          "Referer": "https://leetcode.com/mathur17021play/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "{\"query\":\"\\n    query skillStats($username: String!) {\\n  matchedUser(username: $username) {\\n    tagProblemCounts {\\n      advanced {\\n        tagName\\n        tagSlug\\n        problemsSolved\\n      }\\n      intermediate {\\n        tagName\\n        tagSlug\\n        problemsSolved\\n      }\\n      fundamental {\\n        tagName\\n        tagSlug\\n        problemsSolved\\n      }\\n    }\\n  }\\n}\\n    \",\"variables\":{\"username\":\"mathur17021play\"},\"operationName\":\"skillStats\"}",
        "method": "POST"
      })
      console.log(res)
}

main().then(e=>e.json()).then(console.log).catch(console.error);