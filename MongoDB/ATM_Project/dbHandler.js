const {MongoClient}=require('mongodb')
const url='mongodb://127.0.0.1:27017';
const mongoclient=new MongoClient(url);
const dBName='UserDb'
const collectionName='ATM'
let dbo;

mongoclient.connect()
    .then(connection=>{dbo=connection.db(dBName)})
    .catch(err=>console.log("connection failed"))

///////////////////////////////////////////////////////////////////////


function insertCard(req,res){
    res.send(`Welcome to SBI ATM
              Please Insert your Card`)
}
//////////////////////////////////////////////////////////////////////////
function pinGeneration(req,res){
    let user=req.query
     if (!user || Object.keys(user).length === 0) {
        return res.status(400).send("Invalid or empty user data");
    }
     return dbo.collection('ATM').insertOne(user)
    .then(result=>res.send("Pin generated successfully"))
    .catch(err=>res.send("failed to generate pin"))
}
////////////////////////////////////////////////////////////////////////
function mainMenu(req,res){
    res.send(` Withdraw Cash

               Check Balance

               Deposit Money 

               Mini Statement

               Change PIN

               Exit / Cancel`)
}
//////////////////////////////////////////////////////////////////////////////
function loginUser(req,res){
    let user=req.query
    if (!user || Object.keys(user).length === 0) {
        return res.status(400).send("Invalid or empty user data");
    }
   dbo.collection('ATM').findOne({user})
   .then(result=>res.send("Authentication success"))
   .catch(err=>console.log("invalid user"))
   
}
//////////////////////////////////////////////////////////////////////////////
function balanceCheck(req,res){
    let user=req.query
    dbo.collection('ATM').findOne({user})
   .then(result=>res.send(`The balance amount in the account is ${result.amount}`))
   .catch(err=>res.send("failed to get balance amount"))

}
//////////////////////////////////////////////////////////////////////////////////
function deposit(req,res){
    let user=req.query
    let pin=parseInt(user.pin)
    let amount=parseInt(user.amount)
    
    if(!isFinite(pin)){
        return res.send("pin is invalid")
    }
    if(!isFinite(amount) || amount<0){
       return  res.send("Provide a valid amount")
    }
    dbo.collection('ATM').updateOne({pin:pin},{$inc:{amount:amount}})
    .then(()=>  dbo.collection('ATM').findOne({pin:pin}))
    .then(result=>{
                if(!result){
                    return res.send("Account not found")
                }
               return res.send(`The final balance amount after the deposit is ${result.amount}`)})
    .catch(err=>console.log("Transaction failed. Please try again later"))
      
}
/////////////////////////////////////////////////////////////////////////////////////////

function withdrawal(req,res){
    let user=req.query
    let pin=parseInt(user.pin)
    let amount=parseInt(user.amount)
    dbo.collection('ATM').updateOne({pin:pin},{$inc:{amount:amount}})
    .then(()=>dbo.collection('ATM').findOne({pin:pin}))
    .then(result=>res.send(`The final balance after the withdrawal is ${result.amount}`))
    .catch(err=>console.log("Insufficient Balance"))
}
//////////////////////////////////////////////////////////////////////////////////////////////////

function miniStatement(req,res){
    let data=req.query.data
    dbo.collection('ATM').findOne({data})
    .then(result=>res.send(`MiniStatement

        Name   :   ${result.name}
        Account No : ${result.Acc_No}
        Acc_Type  :  ${result.acc_type} 
        Available Balance  :  ${result.amount} 
        `))
    .catch(err=>console.log("failed to get mini statement"))
}

////////////////////////////////////////////////////////////////////////////////////
function transactionFinish(req,res){
    res.send(`Transaction completed successfully

               Please collect your card

               Thank you for using SBI ATM`)
}


module.exports={insertCard,pinGeneration,mainMenu,loginUser,balanceCheck,deposit,miniStatement,withdrawal,transactionFinish}